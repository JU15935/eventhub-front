import { Button } from "../atoms/button";

export function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-brand-bg)">
      <div className="bg-(--color-brand-card) p-10 rounded-xl shadow-lg">
        <h1 className="text-center mb-6">Iniciar Sesión</h1>
        
      
        <Button 
          type="submit" 
          className="w-full"
          onClick={() => alert("¡Botón presionado!")}
        >
          Entrar a EventHub
        </Button>
      </div>
    </div>
  );
}