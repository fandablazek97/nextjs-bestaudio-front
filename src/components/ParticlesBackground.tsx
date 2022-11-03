import { useEffect, useRef } from "react";

type Props = {
  className?: string;
};

const particlesArray: any[] = [];

export default function ParticlesBackground({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvasCtxRef.current = canvasRef.current!.getContext("2d");
    const ctx = canvasCtxRef.current!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function drawCircle() {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2);
      ctx.fill();
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < 1000; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {};
  });

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 h-full w-full bg-transparent ${className}`}
    >
      ParticlesBackground
    </canvas>
  );
}
