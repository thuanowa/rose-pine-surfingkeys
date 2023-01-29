## name: Rosé Pine
## author: thuanowa: https://github.co/thuanowa
## license: unlicense
## upstream now: https://github.com/thuanowa/rose-pine-surfingkeys/blob/main/dist/rose-pine.conf
## upstream when it merge in to rose-pine org: https://github.com/rose-pine/surfingkeys/blob/main/dist/rose-pine.conf
## blurb: All natural pine, faux fur and a bit of soho vibes for the classy minimalist

// foreground               #e0def4
// background               #191724
// selection_foreground     #e0def4
// selection_background     #403d52
// 
// cursor                   #524f67
// cursor_text_color        #e0def4
// 
// url_color                #c4a7e7
// 
// active_tab_foreground    #e0def4
// active_tab_background    #26233a
// inactive_tab_foreground  #6e6a86
// inactive_tab_background  #191724
// 
// active_border_color      none
// inactive_border_color    #403d52
// 
// # black
// color0   #26233a
// color8   #6e6a86
// 
// # red
// color1   #eb6f92
// color9   #eb6f92
// 
// # green
// color2   #31748f
// color10  #31748f
// 
// # yellow
// color3   #f6c177
// color11  #f6c177
// 
// # blue
// color4   #9ccfd8
// color12  #9ccfd8
// 
// # magenta
// color5   #c4a7e7
// color13  #c4a7e7
// 
// # cyan
// color6   #ebbcba
// color14  #ebbcba
// 
// # white
// color7   #e0def4
// color15  #e0def4

#e0def4 #191724 #c4a7e7 #26233a #6e6a86 
#21202e #403d52 #524f67
#eb6f92 #31748f #f6c177 #9ccfd8 #c4a7e7 #ebbcba

settings.theme = `

// https://github.com/brookhong/Surfingkeys/blob/master/src/content_scripts/ui/frontend.css
.sk_theme {
    background: #fff;
    color: #000;
}
.sk_theme input {
    color: #000;
}
.sk_theme .url {
    color: #222;
}
.sk_theme .annotation {
    color: #222;
}
.sk_theme kbd {
    background: #ddd;
    color: #111;
}
.sk_theme .frame {
    background: rgba(129, 120, 222, 0.62);
}
.sk_theme .omnibar_highlight {
    color: #b90c0c;
}
.sk_theme .omnibar_folder {
    color: #4b3acc;
}
.sk_theme .omnibar_timestamp {
    color: #cc4b9c;
}
.sk_theme .omnibar_visitcount {
    color: #1e46e9;
}
.sk_theme .prompt, .sk_theme .resultPage {
    color: #aaa;
}
.sk_theme .feature_name {
    color: #e09b7e;
}
.sk_theme .separator {
    color: #b5b507;
}

body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
}
#sk_omnibar {
    overflow: hidden;
    position: fixed;
    width: 80%;
    max-height: 80%;
    left: 10%;
    text-align: left;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    z-index: 2147483000;
}
.sk_omnibar_middle {
    top: 10%;
    border-radius: 4px;
}
.sk_omnibar_bottom {
    bottom: 0;
    border-radius: 4px 4px 0px 0px;
}
#sk_omnibar span.omnibar_highlight {
    text-shadow: 0 0 0.01em;
}
#sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
    display: inline-block;
    font-size: 20px;
    width: auto;
}
#sk_omnibarSearchArea>input {
    display: inline-block;
    width: 100%;
    flex: 1;
    font-size: 20px;
    margin-bottom: 0;
    padding: 0px 0px 0px 0.5rem;
    background: transparent;
    border-style: none;
    outline: none;
}
#sk_omnibarSearchArea {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
}
.sk_omnibar_middle #sk_omnibarSearchArea {
    margin: 0.5rem 1rem;
}
.sk_omnibar_bottom #sk_omnibarSearchArea {
    margin: 0.2rem 1rem;
}
.sk_omnibar_middle #sk_omnibarSearchResult>ul {
    margin-top: 0;
}
.sk_omnibar_bottom #sk_omnibarSearchResult>ul {
    margin-bottom: 0;
}
#sk_omnibarSearchResult {
    max-height: 60vh;
    overflow: hidden;
    margin: 0rem 0.6rem;
}
#sk_omnibarSearchResult:empty {
    display: none;
}
#sk_omnibarSearchResult>ul {
    padding: 0;
}
#sk_omnibarSearchResult>ul>li {
    padding: 0.2rem 0rem;
    display: block;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #fafafa;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #cddef9;
}
.sk_theme #sk_omnibarSearchResult>ul>li.window {
    border: 2px solid #c7c7c773;
    border-radius: 8px;
    margin: 4px 0px;
}
.sk_theme #sk_omnibarSearchResult>ul>li.window.focused {
    border: 2px solid #fff;
}
.sk_theme div.table {
    display: table;
}
.sk_theme div.table>* {
    vertical-align: middle;
    display: table-cell;
}
#sk_omnibarSearchResult li div.title {
    text-align: left;
}
#sk_omnibarSearchResult li div.url {
    font-weight: bold;
    white-space: nowrap;
}
#sk_omnibarSearchResult li.focused div.url {
    white-space: normal;
}
#sk_omnibarSearchResult li span.annotation {
    float: right;
}
#sk_omnibarSearchResult .tab_in_window {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 88%);
}
#sk_status {
    position: fixed;
    bottom: 0;
    right: 20%;
    z-index: 2147483000;
    padding: 4px 8px 0 8px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #777;
    font-size: 12px;
}
#sk_status>span {
    line-height: 16px;
}
.expandRichHints span.annotation {
    padding-left: 4px;
    color: #56b6c2;
}
.expandRichHints .kbd-span {
    min-width: 30px;
    text-align: right;
    display: inline-block;
}
.expandRichHints kbd>.candidates {
    color: #de0606;
    font-weight: bold;
}
.expandRichHints kbd {
    padding: 1px 2px;
}
#sk_find {
    border-style: none;
    outline: none;
}
#sk_keystroke {
    padding: 6px;
    position: fixed;
    float: right;
    bottom: 0px;
    z-index: 2147483000;
    right: 0px;
    background: #000;
    color: #fff;
}
#sk_usage, #sk_popup, #sk_editor {
    overflow: auto;
    position: fixed;
    width: 80%;
    max-height: 80%;
    top: 10%;
    left: 10%;
    text-align: left;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    z-index: 2147483298;
    padding: 1rem;
}
#sk_nvim {
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 30%;
}
#sk_popup img {
    width: 100%;
}
#sk_usage>div {
    display: inline-block;
    vertical-align: top;
}
#sk_usage .kbd-span {
    width: 80px;
    text-align: right;
    display: inline-block;
}
#sk_usage .feature_name {
    text-align: center;
    padding-bottom: 4px;
}
#sk_usage .feature_name>span {
    border-bottom: 2px solid #888;
}
#sk_usage span.annotation {
    padding-left: 32px;
    line-height: 22px;
}
#sk_usage * {
    font-size: 10pt;
}
kbd {
    white-space: nowrap;
    display: inline-block;
    padding: 3px 5px;
    font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    vertical-align: middle;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #bbb;
}
#sk_banner {
    padding: 0.5rem;
    position: fixed;
    left: 10%;
    top: -3rem;
    z-index: 2147483000;
    width: 80%;
    border-radius: 0px 0px 4px 4px;
    border: 1px solid #ffc356;
    border-top-style: none;
    text-align: center;
    background: rgb(255, 233, 182);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
#sk_tabs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: auto;
    z-index: 2147483000;
}
div.sk_tab {
    display: inline-block;
    border-radius: 3px;
    padding: 10px 20px;
    margin: 5px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#DAE6F5), color-stop(100%,#B0CCEF));
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
}
div.sk_tab_wrap {
    display: inline-block;
}
div.sk_tab_icon {
    display: inline-block;
    vertical-align: middle;
}
div.sk_tab_icon>img {
    width: 18px;
}
div.sk_tab_title {
    width: 150px;
    display: inline-block;
    vertical-align: middle;
    font-size: 10pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 5px;
    color: #000;
}
div.sk_tab_url {
    font-size: 10pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
}
div.sk_tab_hint {
    display: inline-block;
    float:right;
    font-size: 10pt;
    font-weight: bold;
    padding: 0px 2px 0px 2px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785), color-stop(100%,#FFC542));
    color: #000;
    border: solid 1px #C38A22;
    border-radius: 3px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
}
#sk_bubble {
    position: absolute;
    padding: 9px;
    border: 1px solid #999;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    color: #222;
    background-color: #ffd;
    z-index: 2147483000;
    font-size: 14px;
}
#sk_bubble .sk_bubble_content {
    overflow-y: scroll;
    background-size: 3px 100%;
    background-position: 100%;
    background-repeat: no-repeat;
}
.sk_scroller_indicator_top {
    background-image: linear-gradient(rgb(0, 0, 0), transparent);
}
.sk_scroller_indicator_middle {
    background-image: linear-gradient(transparent, rgb(0, 0, 0), transparent);
}
.sk_scroller_indicator_bottom {
    background-image: linear-gradient(transparent, rgb(0, 0, 0));
}
#sk_bubble * {
    color: #000 !important;
}
div.sk_arrow>div:nth-of-type(1) {
    left: 0;
    position: absolute;
    width: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    background: transparent;
}
div.sk_arrow[dir=down]>div:nth-of-type(1) {
    border-top: 12px solid #999;
}
div.sk_arrow[dir=up]>div:nth-of-type(1) {
    border-bottom: 12px solid #999;
}
div.sk_arrow>div:nth-of-type(2) {
    left: 2px;
    position: absolute;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    background: transparent;
}
div.sk_arrow[dir=down]>div:nth-of-type(2) {
    border-top: 10px solid #ffd;
}
div.sk_arrow[dir=up]>div:nth-of-type(2) {
    top: 2px;
    border-bottom: 10px solid #ffd;
}
.ace_editor.ace_autocomplete {
    z-index: 2147483300 !important;
    width: 80% !important;
}
@media only screen and (max-width: 767px) {
    #sk_omnibar {
        width: 100%;
        left: 0;
    }
    #sk_omnibarSearchResult {
        max-height: 50vh;
        overflow: scroll;
    }
    .sk_omnibar_bottom #sk_omnibarSearchArea {
        margin: 0;
        padding: 0.2rem;
    }
}

`;
