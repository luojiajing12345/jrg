function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        style.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = 10000
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkDown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

    var result = `/*
* 面试官你好,我是xxx
* 我将以动画的形式来介绍自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

*{
  transition:all 1s;
}
html{
  background:rgb(222,222,222);
  font-size:16px
}
#code{
  border:1px solid red;
  padding:16px
}

/* 我需要一些代码高亮 */
.token.selector {
    color: #690
}
.token.property {
    color: #905
}
.token.function {
    color: #DD4A68
}

/*加点3D特效*/
#code{
    transform:rotate(360deg)
}
    
/* 不玩了，我来介绍一下我自己吧 */
/* 我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper>.content{
    background:white;
    height:100%;
    width:100%;
}
`

    var result2 = `
#paper{
}
/*
* 接下来把Markdown变成HTML -markded.js
*/

/*
* 接下来给 HTML加样式
*/
/*
* 这就是我的会动的简历了
*/
`
    var md = `
# 自我介绍

我叫 xxx
1990 年 1 月出生
xxx学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉JavaScript css html

# 项目介绍
1. xxx轮播
2. xxx简历
3. xxx画板
4. xxx导航栏

# 联系方式
手机 xxxxxxxxxxx
Email xxxxxxxxxx
QQ xxxxxxxxx
`
    writeCode('', result, () => {
        createPaper(() => {
            writeCode(result, result2, () => {
                writeMarkDown(md)
            })
        })
    })




    function createPaper(fn) {
        var paper = document.createElement('div')
        paper.id = 'paper'
        var content = document.createElement('pre')
        content.className = 'content'
        paper.appendChild(content)
        document.body.appendChild(paper)
        fn.call()
    }