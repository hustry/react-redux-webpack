
### React + redux + webpack

## 使用
```js
//--content-base：指定了serve的文件目录
//--inline：自动刷新使用inline模式
//--hot:自动添加热替换plugin
webpack-dev-server --content-base build --inline --hot
```
或者

```js
npm run dev
```

##关于redux
redux有三大principal
*只有一个store,里面保存在整个应用程序的state对象
*state是只读的，仅仅可以通过emit一个action来更改state
*如何更改由reducer定义
