var tile1 = new Image();

window.onload = function()
{
	// canvas inicio
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	tile1.src = "fogo.png";
	
	// canvas dimensoes
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	// particula floco neve
	var mp = 300; // max particulas
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordenada
			y: Math.random()*H, //y-coordenada
			r: Math.random()*4+1, //raio
			d: Math.random()*mp //densidade
		})
	}
	
	//desenhar flocos
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//ctx.moveTo(p.x, p.y);
			ctx.drawImage(tile1, p.x, p.y, p.r *2, p.r *2);
			//ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		update();
	}
	
	//Funcão para mover flocos neve
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			// atualizando coordenadas X e Y 
			// adicionamos 1 para a função de cosseno para prevenir valores negativos
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			// enviando o floco para o topo quando ele sai
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% dos flocos
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					// se o floco sair pela direita
					if(Math.sin(angle) > 0)
					{
						// entrada pela esquerda
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						// entrada pela direita
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	// loop de animação
	setInterval(draw, 33);
}