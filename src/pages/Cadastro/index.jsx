import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nome, setNome] = useState("");


    return (
        <LayoutComponents> 
            <form className="login-form">
                <span className="login-form-title">Cadastro de Usuário</span>

                <div className="wrap-input">
                    <input className={nome !== "" ? "has-val input" : "input"}  /* Se email diferente de vazio (preenchido) chamar a classe  has-val input, senão chamar input */
                        type="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

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

                <div className="wrap-input">
                    <input className={password !== "" ? "has-val input" : "input"}  /* Se email diferente de vazio (preenchido) chamar a classe  has-val input, senão chamar input */
                        type="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Confirmar senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Cadastrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta? </span>
                    <Link className="txt2" to="/login">
                        Login.
                    </Link>
                </div>

            </form>
        </LayoutComponents>
    );
};