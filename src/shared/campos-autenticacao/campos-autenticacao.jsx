import { Input } from "../shared.jsx";
export function CamposDigitacao({
  nome,
  setNome,
  email,
  setEmail,
  senha,
  setSenha,
}) {
  return (
    <>
      {nome && (
        <div className="form__campo-digitacao">
          <Input
            label="Nome"
            tipo="text"
            placeholder="Nome Completo"
            id="text"
            value={nome}
            setValor={setNome}
          />
        </div>
      )}
      <div className="form__campo-digitacao">
        <Input
          label="E-mail ou usuário"
          tipo="email"
          placeholder="Digite o seu email ou usuário"
          id="email"
          value={email}
          setValor={setEmail}
        />
      </div>
      <div className="form__campo-digitacao">
        <Input
          label="Senha"
          tipo="password"
          placeholder="Digite a sua senha"
          id="password"
          value={senha}
          setValor={setSenha}
        />
      </div>
    </>
  );
}
