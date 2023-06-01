# babel-plugin-replace-assets-with-url
用于将本地资源路径替换为线上地址

### 使用
npm i babel-plugin-replace-assets-with-url -D

1. 参数 localValue => 本地资源路径 建议使用alias别名
2. 参数 replaceValue => 替换目标 线上地址

### Example
```
{
  "plugins": [
    [
      "babel-plugin-replace-assets-with-url",
      {
        "localValue":  '@/assets/images',
        "replaceValue": 'https://xx-oss-cn-xxx.aliyuncs.com/xxx',
      }
    ]
  ]
}
```

#### 效果展示
```
<image src="/assets/images/xxx.png" />
               转为
<image src="https://xx-oss-cn-xxx.aliyuncs.com/xxx.png" />

```

##### 注：该插件主要用于Taro小程序开发，将静态图片资源转为在线地址，以此来减小打包体积