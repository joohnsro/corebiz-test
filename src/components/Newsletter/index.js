import React, { useState } from 'react';
import { addToNewsletter } from '../../api/NewsletterApi';

import "./styles.css";

function Newsletter () {
    const [form, setForm] = useState({
        name: '',
        email: ''
    });

    const [error, setError] = useState({
        name: false,
        email: false
    });

    const [emailSended, setEmailSended] = useState(false);

    function handleSubmit() {
        const {name, email} = form;

        let errors = {
            name: nameHaveError(name),
            email: emailHaveError(email)
        }
        
        setError(errors);

        if ( !errors.name && !errors.email ) {

            const send = async () => {
                return await addToNewsletter({
                    name,
                    email
                });
            }
        
            send().then(response => {
                setEmailSended(true);
            });
        }
    }

    function nameHaveError(name) {
        return name === '' ? true : false;
    }

    function emailHaveError(email) {
        const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return String(email).match(format) ? false : true;
    }

    return (
        <section id="newsletter">

            {!emailSended ?
                <>
                    <h3>Participe de nossas news com promoções e novidades!</h3>

                    <div className="form">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Digite seu nome" 
                                value={form.name} 
                                onChange={({target}) => {
                                    setForm({...form, name: target.value})
                                }}
                                className={error.name ? 'error' : ''}
                            />
                            {error.name ? <span>Preencha com seu nome completo</span> : ''}
                        </div>
                        <div className="input-field">
                            <input 
                                type="email" 
                                placeholder="Digite seu email" 
                                value={form.email} 
                                onChange={({target}) => { 
                                    setForm({...form, email: target.value})
                                }}
                                className={error.email ? 'error' : ''}
                            />
                            {error.email ? <span>Preencha com um e-mail válido</span> : ''}
                        </div>

                        <button
                            className="newsletter-button"
                            onClick={handleSubmit}
                        >Eu quero!</button>
                    </div>
                </>
            : <div className="sended">
                <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                <button
                    className="newsletter-new"
                    onClick={() => setEmailSended(false)}
                >Cadastrar novo e-mail</button>
            </div>}


            
        </section>
    );
}

export default Newsletter;