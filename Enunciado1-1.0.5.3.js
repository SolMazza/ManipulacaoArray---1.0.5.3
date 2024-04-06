const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
    },
  ];

  function apresentacao(){
    return medicos.map(medico => {
        if(medico.genero === 'nao-binario'){
            return {
                ...medico,
                apresentacao : 'Dr(e) ' + medico.nome + ' ' + medico.sobrenome,
            } 
        }
        if(medico.genero === 'masculino'){
            return {
                ...medico,
                apresentacao : 'Dr ' + medico.nome + ' ' + medico.sobrenome,
            } 
        }
        if(medico.genero === 'feminino'){
            return {
                ...medico,
                apresentacao : 'Dr(a) ' + medico.nome + ' ' + medico.sobrenome,
            } 
        }

    })
  }
  console.log(apresentacao())