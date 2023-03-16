const path=require('path');
const {merge }=require('webpack-merge');
const base=require('./webpack.base');
const nodeExternal=require('webpack-node-externals')

module.exports=merge(base,{
  target:'node',
  entry:'./src/server/index.js',
  output:{
    path:path.resolve("build"),
    filename:'server.js'
  },
  //不需要node去处理node_modules中的文件
  externals:[nodeExternal()],
  module:{
    rules:[{
      test:/.css$/,
      use:[
        //将css转为style插入到header SSr需要注意的
        'isomorphic-style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true
            }
          }
       ]
    }]
  }
})