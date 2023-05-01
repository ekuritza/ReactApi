import React from 'react';
import './cadastro.css';
import { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtnGroup
}
from 'mdb-react-ui-kit';

function Cadastrar() {
  
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [cvv, setCvv] = useState('');
    const [subscriptionType, setSubscriptionType] = useState('');

    function handleSubscriptionType(type) {
        setSubscriptionType(type);
      }

  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Nome:', nome,
                'Sobrenome:', sobrenome,
                'Telefone:', telefone,
                'Endereço:', endereco,
                'Nome do Cartão:', nomeCartao,
                'Número do Cartão:', numeroCartao,
                'CVV:', cvv,
                'Tipo de assinatura selecionado:', subscriptionType,
                );
                alert('Suas informações foram salvas no console!');
                setNome('');
                setSobrenome('');
                setTelefone('');
                setEndereco('');
                setNomeCartao('');
                setNumeroCartao('');
                setCvv('');
                setSubscriptionType('');
    };

  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Catálogo cheio de<br />
            <span className="text-primary">super-heróis!</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Não perca mais tempo procurando por arquivos na internet, agora você pode ter acesso a um vasto acervo de filmes, séries, documentários e muito mais em um único lugar. Com nosso serviço de streaming de file, você pode assistir a tudo o que deseja, quando e onde quiser. Além disso, nosso sistema é fácil de usar e sempre atualizado com as últimas novidades do mundo do entretenimento. Não perca mais tempo com downloads demorados e links quebrados. Garanta agora mesmo sua assinatura e comece a desfrutar do melhor conteúdo de entretenimento em streaming de file!
          </p>

        </MDBCol>

        <MDBCol md='6'>
  <MDBCard className='my-5'>
    <MDBCardBody className='p-5'>
      <MDBRow>
        <MDBCol col='6'>
          <MDBInput wrapperClass='mb-4' label='Nome' type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
        </MDBCol>
        <MDBCol col='6'>
          <MDBInput wrapperClass='mb-4' label='Sobrenome' type='text' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
        </MDBCol>
      </MDBRow>
      <MDBInput wrapperClass='mb-4' label='Telefone' type='number' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <MDBInput wrapperClass='mb-4' label='Endereço' type='text' value={endereco} onChange={(e) => setEndereco(e.target.value)} />
      <MDBInput wrapperClass='mb-4' label='Nome do cartão' type='text' value={nomeCartao} onChange={(e) => setNomeCartao(e.target.value)} />
      <MDBInput wrapperClass='mb-4' label='Número do cartão' type='text' maxLength={20} value={numeroCartao} onChange={(e) => setNumeroCartao(e.target.value)} />
      <MDBRow>
        <MDBCol md='6' className='d-flex align-items-center'>
          <MDBInput wrapperClass='mb-4' label='CVV' type='password' maxLength={3} style={{ maxWidth: '120px' }} value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </MDBCol>
        <MDBCol md='6' className='d-flex align-items-center'>
          <MDBBtnGroup>
            <MDBBtn outline color='primary' className={`subscription-button ${subscriptionType === 'free' ? 'active' : 'inactive'}`} onClick={() => handleSubscriptionType('free')}>
              Free
            </MDBBtn>
            <MDBBtn outline color='primary' className={`subscription-button ${subscriptionType === 'plus' ? 'active' : 'inactive'}`} onClick={() => handleSubscriptionType('plus')}>
              Plus
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
      <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>Assinar</MDBBtn>
      <div className="text-center"></div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>


      </MDBRow>

    </MDBContainer>
  );
}

export default Cadastrar;