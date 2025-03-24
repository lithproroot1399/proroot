import React from 'react'

export default function Email() {
  const EmailLink = () => {
    const abrirEmail = () => {
      const remetente = 'seuemail@dominio.com'
      const destinatario = 'destinatario@dominio.com'
      const assunto = encodeURIComponent('Assunto do E-mail')
      const corpo = encodeURIComponent('Olá, estou entrando em contato.')
      window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}&from=${remetente}`
    }

    return (
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      <a href="#" onClick={abrirEmail}>
        Enviar E-mail
      </a>
    )
  }
}
