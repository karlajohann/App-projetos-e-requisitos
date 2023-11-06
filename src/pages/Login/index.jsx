import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useState } from "react"
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Função para lidar com o envio do formulário
    const handleLogin = (e) => {
        e.preventDefault();

        // lógica de autenticação. Por exemplo, verificar se o email e a senha são válidos.

        // Se a autenticação for bem-sucedida, defina isLoggedIn como true.
        setIsLoggedIn(true);
    };
    
        // Se o usuário já estiver logado, redirecione para a página de destino
        if (isLoggedIn) {
            <redirect to="Home" />;
        };

    return (
        <LayoutComponents>
            <form className="login-form" onSubmit={handleLogin}>
                <span className="login-form-title">Login</span>

                <div className="wrap-input">
                    <input className={email !== "" ? "has-val input" : "input"}  /* Se email diferente de vazio (preenchido) chamar a classe  has-val input, senão chamar input */
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input className={password !== "" ? "has-val input" : "input"}  /* Se email diferente de vazio (preenchido) chamar a classe  has-val input, senão chamar input */
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <Link className="text2" to="/cadastro">
                        Criar Conta
                    </Link>
                </div>

            </form>
        </LayoutComponents>

        
    );
}

