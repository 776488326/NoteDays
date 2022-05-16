# 组合式API

## setup

### 介绍

- 新的配置项，值为函数
- 组件中用到的所有数据，方法，计算属性，生命周期等均配置在setup中

```ts
// 引入渲染函数h
import {h} from "vue"
setup(){
    let name:string = "fengliang";
    function say(name:string):viod {
        console.log(name);
    }
    return {
        say,
        name
    }
    // 返回渲染函数
    return ()=>{ return h("DOM元素","内容")}
}

```
### 注意点

- setup返回对象时，对象内部的所有属性方法，均可在模版中直接使用。
- 返回渲染函数时，渲染函数h的结果会替换掉整个templete中的内容
- 当与vue2的配置项中数据或函数重名时，以setup优先
- setup不能是async函数，因为异步函数的返回值会被promise包裹，模版无法读取到对象中的属性（**如果动态引入组件，setup也可以是async**）
- 执行时机：在beforeCreate之前只执行一次，this为undefined，收到两个参数
    - 第一个参数为props，必须已经通过props配置项声明接受过，才可收到外部值
    - 第二个参数为context，由于没有this对象，可使用context来代替它。
        - attrs：收到props中未声明接受的属性，相当于this.$attrs。
        - slots：收到插槽内容，相当于this.$slots。传入具名插槽时，使用指令v-slot:名
        - emit：收到自定义事件，相当于this.$emit。

## ref函数

### 介绍

- ref函数用于实现**数据的响应式**
- 标签中的ref是用于实现对标签的引用
```ts
// 引入响应式函数ref
import {ref} from "vue";

setup(){
    let name:string = ref("fengliang");
    return {
        name
    }
}
```

### 注意点

- ref函数返回包含响应式数据的引用对象
- 通过get，set来劫持数据实现基本数据类型的响应式。生成RefImpl对象
- 通过proxy来代理对象实现复杂数据类型的响应式。生成Proxy对象
- 响应的数据通过value属性暴露数据的值。
- 模版中读取数据值不需要通过value属性，因为在暴露之前底层自动调用了。

## reactive函数

### 介绍

- 用于实现**对象类型数据的响应式**
```ts
// 引入响应式函数ref，reactive
import {ref,reactive} from "vue"
setup(){
    let name:string = ref("fengliang");
    interface persion{
        age:number;
        hobby:string[];
        say(){};
    }
    let p:persion = reactive({
        age:"18",
        hobby: [
            "篮球"，
            "排球",
            "足球"
        ];
    })
    return {
        name,
        p
    }
}

```
### 注意点

- 默认是深层响应
- 除了对象也可以代理数组
- 代理的数据可以直接使用

## Ref&&Reactive对比

- ref用于定义基本类型数据
- reactive用于定义对象类型数据
- ref也可代理对象，内部仍然是使用reactive实现。
- ref是通过Object.defineProperty()的get，set实现的数据劫持，手动实现数据操作。
- reactive是通过Proxy的get，set，deleteProperty实现的数据劫持，通过Reflect实现数据操作。
- ref定义的响应式数据需要通过.value来操作，模版中不需要
- reactive定义的响应式数据直接操作即可。
- Reflect对象，拥有Object对象身上几乎所有的方法。通过Reflect修改不会抛出异常，而是通过其身上的函数返回值来标识执行的结果。

## computed函数

### 介绍

- 用于计算属性
```ts
import {computed} from "vue"
setup(){
    let persion = {
        lastName:"feng",
        firstName: "liang"
    }
    // 简写，只考虑读取
    persion.fullName = computed(()=>{
        return persion.lastName+"-"+persion.firstName;
    })

    // 完整写法
    persion.fullName = computed({
        get(){
            return persion.lastName+persion.firstName;
        },
        set(newValue){
            persion.lastName = newValue.split("-")[0];
            persion.firstName = newValue.split("-")[1];
        }
    })
    return {
        persion
    }
}
```

## watch函数

### 介绍

- 用于监视属性
```ts
import {reactive,ref,watch} from "vue"
setup(){
    let persion = {
        name:"fengliang",
        age:18,
        sex:"male",
        sorce:{
            english:80,
            math:100
        }
    };
    let home = "世纪佳缘";
    // reactive定义响应式数据
    let p = reactive(persion);
    // ref定义响应式数据
    let h = ref(home);

    // 监视单个ref数据
    watch(
        h, // 要监视的数据
        (newValue,oldValue)=>{
            return ;
        }, // 执行的操作
        {
            immediate:true
        }  // 是否立即执行
    )   

    // 监视多个ref数据
    watch([h,h1],(newValue,oldValue)=>{
        newValue=>[h,h1],
        oldValue=>[h,h1]
    })

    
    // 监视reactive全部属性数据
    watch(
        p,
        (newValue,oldValue)=>{
            // newValue == oldValue ，无法获取到旧数据
        },
        {
            // 强制开启深度监视，deep配置项无效
            deep:true
        }
    )

    // 监视reactive中的某个属性数据（非对象类型属性）
    watch(
        ()=>p.name,
        (newValue,oldValue)=>{
            // 可以获取到正确的oldValue
        }
    )

    // 监视reactive中的某些属性（非对象类型属性）
    watch(
        [()=>p.name,()=>p.age],
        (newValue,oldValue)=>{
            // 可以获取到正确的oldValue
        }
    )

    // 监视reactive中的（对象类型属性）
    watch(
        ()=>p.score,
        (newValue,oldValue)=>{
            // newValue == oldValue ，无法获取到旧数据
        },
        {
            // 由于是对象类型属性，而非reactive对象，可配置deep来开启深度监视
            deep:true
        }
    )
}
```

### 注意点

1. watch只能监视ref数据，数组数据，reactive数据。
2. 监视reactive对象中的属性，只能通过函数返回值，对象类型属性deep配置有效
3. 监视reactive对象中的多个基本属性，用数组包裹函数返回值，oldvalue可获取
4. 如果对象中的属性有oldValue的需求，建议放在对象外部，使用ref来监视
5. 监视ref数据时不需要.value，.value是读数据值呢，不能监视一个具体的值。
6. 监视ref定义的对象，不需要.value，如果.value则由于其值本质是reactive定义的会导致旧值无法获取。直接监视ref对象，开启deep：true就可实现value值监视

### watchEffect

- 不需要指定监视的数据，直接配置逻辑，默认开启immediate。
- 会自动监视逻辑中用到的数据，无论是ref还是reactive定义的数据都会自动监视

## hooks

### 介绍

- 本质上一个函数，可以将组合式API封装
- 一般hooks模块文件名称以use开头
- 类似于与Vue2中的mixin，提高代码复用率

## toRef && toRefs

### 介绍

- toRef可以将一个非ref对象改为ref对象
- 可以实现对非ref对象的引用，保留响应式
- toRefs可以将一个对象中所有的属性值更改为ref对象，保留响应式
```ts
import {ref,toRef,reactive} from "vue"
setup(){
    let persion = reactive({
        name: "fengliang",
        age: 18,
        salary: "20K"
    })
    return {
        // 会导致外部使用时必须通过persion点语法来获取数据
        persion,

        // 使用解构赋值，会丢失响应式
        ...persion,

        // 使用toRef来转换为响应式，会生成新的响应式对象，会与源数据关联。

        name:toRef(persion,"name"),
        age: toRef(persion,"age"),

        // 如果使用ref来转换为响应式，则会生成新的响应式对象，但不会与源数据关联
        name: ref(persion.name),
        age: ref(persion.age),

        // 如果使用toRefs来转换为响应式，会生成新的响应式对象，会与源数据关联
        ...toRefs(persion),
    }
}
```

## shallowReactive && shallowRef

### 介绍

- shallowReactive：只处理对象中第一层的属性，不会强制开启deep（性能优化）
- shallowRef：不能处理对象类型的响应式。如果传入对象类型会转换为普通的object，对象内的所有属性均没有响应式，**但是对象本身是有响应式的**。

## readOnly && shallowReadOnly

### 介绍

- 对一个响应式对象进行限制，属性全部为只读（深只读）。
- 当引入别人的hooks，且只需要进行展示时，为防止修改别人的值，可用readOnly进行处理
- shallowReadOnly让响应式对象变成只读（浅只读）。

## toRaw && markRaw

### 介绍

- toRaw将一个reactive生成的响应式**对象**转换为初始的普通对象可以修改，但是没有响应式
- markRaw标记一个对象，使其永远不会成为响应式对象。
    - 当引入第三方类库时，我们一般不需要进行响应式，或者展示的数据不会改变时，可以用
- 与readonly的不同在于，readonly是无法修改，raw是可以修改，但是没有响应式。

## customRef

### 介绍

- 创建一个自定义ref，并对其**依赖项跟踪**和**更新触发**进行显示控制
- 可以在响应式处理之前进行自定义操作
- 在数据发生变化时，set函数中调用trigger来触发更新
- get函数中调用track来追踪数据的变化，与trigger相互配合。

```ts
import {customRef} from "vue"
function ref(value,delay){
    let timer = null;
    return customRef((track,trigger)=>{
        return {
            get(){
                track();
                return value;
            },
            set(newValue){
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    value = newValue;
                    trigger();
                },delay);
            }
        }
    })
}

```

## provide && inject

### 介绍

- 组件间通信，一般用于隔几代的组件通信
- 父子通信仍然使用props最简单
- 祖先组件中调用provide("name",value)
- 后代组件中调用inject("name");

## 响应式数据的判断

- isRef：是否为ref创建的对象
- isReadOnly：是否为readonly创建的对象
- isReactive：是否为reactive创建的对象
- isProxy：是否为reactive和readonly创建的对象

## 组合式API && 配置式API

- 配置式API，实现功能时，我们需要分别在data中保存数据，methods中保存方法等，比较分散。
- 组合式API，实现功能时，封装在一个hooks，所有的逻辑处理都在函数内，将结果数据返回即可。
