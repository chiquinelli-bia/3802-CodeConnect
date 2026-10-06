import React from "react";
import { Input } from "../shared.jsx";

export function CamposAutenticacao({
  nome,
  setNome,
  email,
  setEmail,
  senha,
  setSenha,
  fotoPreview,
  handleFotoChange,
  camposOpcionais,
}) {
  return (
    <>
      {camposOpcionais?.foto && (
        <div className="form__campo-foto">
          <label htmlFor="foto" className="form__label-foto">
            {fotoPreview ? (
              <img
                src={fotoPreview}
                alt="Preview da foto de perfil"
                className="form__foto-preview"
              />
            ) : (
              <span>Selecionar Foto de Perfil</span>
            )}
          </label>
          <input
            type="file"
            id="foto"
            accept="image/*"
            onChange={handleFotoChange}
            style={{ display: "none" }}
          />
        </div>
      )}

      {camposOpcionais?.nome && (
        <div className="form__campo-digitacao">
          <Input
            label="Nome"
            tipo="text"
            placeholder="Nome Completo"
            id="nome"
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
          placeholder="Senha de no mínimo 6 caracteres"
          id="password"
          value={senha}
          setValor={setSenha}
          minLength={6}
        />
      </div>
    </>
  );
}
