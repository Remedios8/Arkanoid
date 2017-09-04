var _renderer=(function(){
return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||
window.msRequestAnimationFrame||
function(callback){
setTimeout(callback,1000/60);
};//����� �� � ��������� ������� ���������� requestAnimationFrame
})();

var _engine=function(){// ������� ����
	console.log('������� ���� �� �������������');
};

//������� ��� ������ ����
var startGame=function(game){//����� ������� game � ����������� �� �������� �����
	if(typeof game=='function'){
		_engine=game;
	}
	gameLoop();
	
};
var setGame=function(game){
	if (typeof game=='function'){
		_engine=game;
	}	
};
//��������� ���������� �������� �����
var gameLoop=function(){
	_engine();
	_renderer(gameLoop);//���������� ����� ����
	
};
var  pauseGame=function(game) {
    game = clearTimeout(game);
 
};