
const parse = require('@babel/parser').parse;//Babel中使用的JavaScript解析器  将源码转换为AST

//ast 抽象语法树
module.exports = ({ types: t }, options, dirname) => {

    return {
        visitor: {
            ImportDeclaration(path) {

                try {
                    const node = path.node;//当前 AST 节点
                    const value = node.source.value;

                    const replaceValue = options.replaceValue;
                    const localValue = options.localValue

                    if (value.startsWith(localValue)) {
                        const url = node.source.value.replace(localValue, replaceValue);
                        const name = node.specifiers[0].local.name;

                        //源码转换成AST
                        const newNode = parse(`const ${name} = '${url}';`)
                        //节点替换 
                        path.replaceWith(newNode)
                    }

                } catch (e) {
                    console.log('===图片资源转换失败===');
                    console.log(e)
                }
            }
        }
    }
}