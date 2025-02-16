window.__require=function t(e,i,a){function s(c,o){if(!i[c]){if(!e[c]){var n=c.split("/");if(n=n[n.length-1],!e[n]){var h="function"==typeof __require&&__require;if(!o&&h)return h(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+c+"'")}c=n}var m=i[c]={exports:{}};e[c][0].call(m.exports,function(t){return s(e[c][1][t]||t)},m,m.exports,t,e,i,a)}return i[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<a.length;c++)s(a[c]);return s}({donate:[function(t,e){"use strict";cc._RF.push(e,"c437dy2FkZIF5aX8mLBLRFz","donate"),cc.Class({extends:cc.Component,properties:{},start:function(){},goBack2Home:function(){cc.director.loadScene("game")}}),cc._RF.pop()},{}],game:[function(t,e){"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}cc._RF.push(e,"7c09c4itN9IRbLSGurkq0kz","game");cc.Class({extends:cc.Component,properties:{gameReady:cc.Node,gameStart:cc.Node,gameOver:cc.Node,gameOverCard:cc.Node,prefabItemBg:cc.Prefab,prefabItem:cc.Prefab,mainBg:cc.Node,label_difficulty:cc.Label,label_score:cc.Label,label_bestScore:cc.Label,label_scoreOver:cc.Label,music_move:cc.AudioClip,music_score:cc.AudioClip},onLoad:function(){this.scoreNum=0,this.bestScoreNum=0,this.numMatrix=[],this.itemNum=0,this.itemGutter=5,this.mainBgSize=640,this.itemPool=new cc.NodePool,this.gameState=0,this.touchStartPos=cc.v2(0,0),this.touchEndPos=cc.v2(0,0),this.minMoveDistance=50,cc.macro.ENABLE_MULTI_TOUCH=!1,this.gameData={},this.gameData=JSON.parse(cc.sys.localStorage.getItem("userData")),this.setTouchListener(),this._gameReadyShow()},setScore:function(t,e){null!=e&&(this.scoreNum=e),this.scoreNum+=t,this.label_score.string=this.scoreNum},setTouchListener:function(){function t(t){this.touchEndPos=t.getLocation(),this.moveItem(this.getMoveDirection())}this.mainBg.on(cc.Node.EventType.TOUCH_START,function(t){this.touchStartPos=t.getLocation()},this),this.mainBg.on(cc.Node.EventType.TOUCH_END,t,this),this.mainBg.on(cc.Node.EventType.TOUCH_CANCEL,t,this)},getMoveDirection:function(){var t=this.touchEndPos.x-this.touchStartPos.x,e=this.touchEndPos.y-this.touchStartPos.y;if(!(Math.abs(t)<this.minMoveDistance&&Math.abs(e)<this.minMoveDistance))return Math.abs(t)>Math.abs(e)?t>0?"RIGHT":"LEFT":e>0?"UP":"DOWN"},moveItem:function(t){var e=this.numMatrix,i=this.itemNum,a=!1,s=!1;switch(t){case"UP":for(var r=i-2;r>=0;r--)for(var c=0;c<i;c++)if(0!==e[r][c])if(e[r][c]===e[r+1][c])e[r+1][c]=2*e[r][c],e[r][c]=0,this.setScore(e[r+1][c]),this.setBestScore(),s=!0,a=!0;else if(0===e[r+1][c]){for(var o=r+1,n=r+2;n<i;n++)if(0===e[n][c])o=n;else{if(e[n][c]!==e[r][c])break;e[n][c]=2*e[r][c],e[r][c]=0,this.setScore(e[n][c]),this.setBestScore(),s=!0}0!==e[r][c]&&(e[o][c]=e[r][c],e[r][c]=0),a=!0}break;case"DOWN":for(var h=1;h<=i-1;h++)for(var m=0;m<i;m++)if(0!==e[h][m])if(e[h][m]===e[h-1][m])e[h-1][m]=2*e[h][m],e[h][m]=0,this.setScore(e[h-1][m]),this.setBestScore(),s=!0,a=!0;else if(0===e[h-1][m]){for(var u=h-1,l=h-2;l>=0;l--)if(0===e[l][m])u=l;else{if(e[l][m]!==e[h][m])break;e[l][m]=2*e[h][m],e[h][m]=0,this.setScore(e[l][m]),this.setBestScore(),s=!0}0!==e[h][m]&&(e[u][m]=e[h][m],e[h][m]=0),a=!0}break;case"LEFT":for(var f=1;f<=i-1;f++)for(var g=0;g<i;g++)if(0!==e[g][f])if(e[g][f]===e[g][f-1])e[g][f-1]=2*e[g][f],e[g][f]=0,this.setScore(e[g][f-1]),this.setBestScore(),s=!0,a=!0;else if(0===e[g][f-1]){for(var d=f-1,v=f-2;v>=0;v--)if(0===e[g][v])d=v;else{if(e[g][v]!==e[g][f])break;e[g][v]=2*e[g][f],e[g][f]=0,this.setScore(e[g][v]),this.setBestScore(),s=!0}0!==e[g][f]&&(e[g][d]=e[g][f],e[g][f]=0),a=!0}break;case"RIGHT":for(var S=i-2;S>=0;S--)for(var b=0;b<i;b++)if(0!==e[b][S])if(e[b][S]===e[b][S+1])e[b][S+1]=2*e[b][S],e[b][S]=0,this.setScore(e[b][S+1]),this.setBestScore(),s=!0,a=!0;else if(0===e[b][S+1]){for(var p=S+1,N=S+2;N<i;N++)if(0===e[b][N])p=N;else{if(e[b][N]!==e[b][S])break;e[b][N]=2*e[b][S],e[b][S]=0,this.setScore(e[b][N]),this.setBestScore(),s=!0}0!==e[b][S]&&(e[b][p]=e[b][S],e[b][S]=0),a=!0}}a&&(s?(cc.audioEngine.stop(this.currentAudio),this.currentAudio=cc.audioEngine.play(this.music_score,!1,1)):(cc.audioEngine.stop(this.currentAudio),this.currentAudio=cc.audioEngine.play(this.music_move,!1,1)),this.drawAllItems(),this.addRandomItem())},init:function(){this.loadGameData(),this.addItemBg(),this.drawAllItems(!0)},loadGameData:function(){var t=this.itemNum,e=JSON.parse(cc.sys.localStorage.getItem("gameData")),i=!1;e&&Object.keys(e).length>0?(currGameData=e["game_"+t],currGameData&&Object.keys(currGameData).length>0?(this.numMatrix=currGameData.numMatrix,this.bestScoreNum=this.label_bestScore.string=currGameData.bestScore||0,this.numMatrix&&this.numMatrix.length>0?this.setScore(0,currGameData.score):i=!0):(i=!0,this.bestScoreNum=this.label_bestScore.string=0)):(i=!0,this.bestScoreNum=this.label_bestScore.string=0),i&&(this.setScore(0,0),this.initItemArray(),this.addRandomItem())},printItemArray:function(){for(var t=this.numMatrix,e=new Array,i=0;i<t.length;i++)e[i]=[].concat(t[i]);cc.log("\u6253\u5370\u6570\u7ec4",t),cc.log("\u6253\u5370\u6570\u7ec4\u53cd\u8f6c",e.reverse())},initItemArray:function(){this.numMatrix=new Array;for(var t=0;t<this.itemNum;t++){this.numMatrix[t]=new Array;for(var e=0;e<this.itemNum;e++)this.numMatrix[t][e]=0}},addRandomItem:function(){for(var t=this.numMatrix,e=this.itemNum,i=[],a=0;a<e;a++)for(var s=0;s<e;s++)0==t[a][s]&&i.push({x:a,y:s});if(0!==i.length){var r=Math.floor(Math.random()*i.length),c=i[r].x,o=i[r].y,n=10*Math.random();this.numMatrix[c][o]=n<2?4:2,this.drawSingleItem({x:c,y:o},this.numMatrix[c][o],!0)}this.saveGameData(),this.printItemArray(),this.judgeGameOver()},judgeGameOver:function(){var t=this.itemNum,e=this.numMatrix,i=!0;t:for(var a=0;a<t;a++)for(var s=0;s<t;s++){if(0===e[a][s]){i=!1;break t}if(a<t-1&&e[a][s]===e[a+1][s]){i=!1;break t}if(s<t-1&&e[a][s]===e[a][s+1]){i=!1;break t}}i&&(cc.log("\u6e38\u620f\u7ed3\u675f"),this.gameState=2,this.label_scoreOver.string="\u60a8\u5f97\u5230\u4e86 "+this.scoreNum+" \u5206",this.scheduleOnce(function(){this.gameOver.active=!0,this.gameOverCard.scale=0,cc.tween(this.gameOverCard).to(.5,{scale:1},{easing:"backOut"}).start()},1))},addItemBg:function(){for(var t=this.mainBgSize,e=this.itemNum,i=this.itemGutter,a=Math.round((t-(e+1)*i)/e),s=cc.v2(-(t/2-a/2-i),-(t/2-a/2-i)),r=0;r<e;r++)for(var c=0;c<e;c++){var o=cc.instantiate(this.prefabItemBg);o.width=o.height=a,o.setPosition(s.x+(o.width+5)*c,s.y+(o.height+5)*r),this.mainBg.addChild(o)}},drawAllItems:function(t){var e=this,i=this.itemNum;if(this.clearAllItem(),t){cc.log("first");for(var a=0,s=function(s){for(var r=function(i){0!==e.numMatrix[s][i]&&e.scheduleOnce(function(){this.drawSingleItem({x:s,y:i},this.numMatrix[s][i],t)},a++/20)},c=0;c<i;c++)r(c)},r=i-1;r>=0;r--)s(r)}else for(var c=0;c<i;c++)for(var o=0;o<i;o++)0!==this.numMatrix[c][o]&&this.drawSingleItem({x:c,y:o},this.numMatrix[c][o]);cc.log("\u5f53\u524dmainBg\u4e2d\u5b50\u8282\u70b9\u6570\u91cf",this.mainBg.childrenCount)},drawSingleItem:function(t,e,i){var a=this.mainBgSize,s=this.itemNum,r=this.itemGutter,c=Math.round((a-(s+1)*r)/s),o=cc.v2(-(a/2-c/2-r),-(a/2-c/2-r)),n=this.getItemInstance();n.getComponent("item").setNum(e,this.itemNum),n.name="item",n.width=n.height=c,n.setPosition(o.x+(n.width+5)*t.y,o.y+(n.height+5)*t.x),this.mainBg.addChild(n),i&&(n.scale=0,cc.tween(n).to(.5,{scale:1},{easing:"backOut"}).start())},getItemInstance:function(){return this.itemPool.size()>0?this.itemPool.get():cc.instantiate(this.prefabItem)},recycleItem:function(t){this.itemPool.put(t)},_gameReadyShow:function(){this.gameState=0,this.gameReady.active=!0,this.gameStart.active=!1,this.gameOver.active=!1,this.mainBg.removeAllChildren()},_gameStartShow:function(){this.gameState=1,this.gameReady.active=!1,this.gameStart.active=!0,this.gameOver.active=!1,this.init()},clickGameStart:function(t,e){this.itemNum=Number.parseInt(e),this.label_difficulty.string=e+" \xd7 "+e,this._gameStartShow()},clickGoBack:function(t,e){if("game_play"===e){if(2===this.gameState)return}else 2===this.gameState&&this.resetGameData();this._gameReadyShow()},clickDonateBtn:function(){cc.director.loadScene("donate")},clickReplay:function(){this.mainBg.removeAllChildren(),this.resetGameData(),this._gameStartShow()},clearAllItem:function(){var t=this,e=[];this.mainBg.walk(function(t){"item"===t.name&&e.push(t)}),e.forEach(function(e){t.recycleItem(e)})},saveGameData:function(){var t=JSON.parse(cc.sys.localStorage.getItem("gameData"));t||(t={}),t["game_"+this.itemNum]={score:this.scoreNum,bestScore:this.bestScoreNum,numMatrix:this.numMatrix},cc.log("\u4fdd\u5b58\u6570\u636e",t),cc.sys.localStorage.setItem("gameData",JSON.stringify(t))},resetGameData:function(){var t=JSON.parse(cc.sys.localStorage.getItem("gameData"));if(t){var e=i({},t);e["game_"+this.itemNum]={bestScore:e["game_"+this.itemNum].bestScore},cc.sys.localStorage.setItem("gameData",JSON.stringify(e))}},setBestScore:function(){this.scoreNum>this.bestScoreNum&&(this.bestScoreNum=this.scoreNum),this.label_bestScore.string=this.bestScoreNum}}),cc._RF.pop()},{}],item:[function(t,e){"use strict";var i;cc._RF.push(e,"34e8f7RIMNB/6uZtUIJ0s0Q","item");var a=((i={2:new cc.Color(238,228,218),4:new cc.Color(237,224,200),8:new cc.Color(242,177,121),16:new cc.Color(245,149,99),32:new cc.Color(246,124,95),64:new cc.Color(246,94,59),128:new cc.Color(238,206,115),256:new cc.Color(236,201,97),512:new cc.Color(236,201,97),1024:new cc.Color(239,196,65)})[Math.pow(2,11)]=cc.Color(238,199,80),i[Math.pow(2,12)]=cc.Color(255,60,61),i[Math.pow(2,13)]=cc.Color(255,30,32),i);cc.Class({extends:cc.Component,properties:{numLabel:cc.Label},onLoad:function(){},setNum:function(t,e){this.numLabel.string=t,this.numLabel.fontSize=70-10*(e-2),this.setColor(t)},setColor:function(t){t<=Math.pow(2,13)?this.node.color=a[t]:this.node.color=a[Math.pow(2,13)]},start:function(){}}),cc._RF.pop()},{}]},{},["donate","game","item"]);