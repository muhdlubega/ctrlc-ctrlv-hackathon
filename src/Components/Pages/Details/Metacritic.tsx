import { useRef, useEffect } from "react";

interface PercentageWheelProps {
  percentage: number;
}

export default function PercentageWheel({ percentage }: PercentageWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const radius = width / 2 - 10;

    const animate = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the background circle
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
      ctx.lineWidth = 10;
      ctx.strokeStyle = "gray";
      ctx.stroke();

      // Update the progress
      progressRef.current += 1;
      if (progressRef.current > percentage) {
        progressRef.current = percentage;
      }

      // Draw the progress arc
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        radius,
        -Math.PI / 2,
        (2 * Math.PI * progressRef.current) / 100 - Math.PI / 2
      );
      ctx.lineWidth = 10;
      ctx.strokeStyle = "purple";
      ctx.stroke();

      // Draw the percentage text
      ctx.font = "bold 40px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      ctx.fillText(`${progressRef.current}%`, width / 2, height / 2);

      // Request the next animation frame
      if (progressRef.current < percentage) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [percentage]);

  return <canvas ref={canvasRef} width={100} height={100} />;
}
