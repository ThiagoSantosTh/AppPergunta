import React from 'react';
import Radio from './Form/Radio';


const perguntas = [
    {
        pergunta: 'O React é uma biblioteca JavaScript de código aberto e, atualmente, é uma das ferramentas mais populares entre os desenvolvedores web. São características do React ser uma biblioteca',
        options: [
          'Declarativa, que não gerencia seu próprio virtual DOM e não permite a criação de aplicativos móveis.',
          'Imperativa, que não gerencia seu próprio virtual DOM e não dá suporte a componentes reutilizáveis.',
          'Declarativa, que gerencia seu próprio virtual DOM e permite a criação de aplicativos móveis.',
          'Imperativa, que gerencia seu próprio virtual DOM e dá suporte a componentes reutilizáveis.',
        ],
    resposta: 'imperativa, que não gerencia seu próprio virtual DOM e não dá suporte a componentes reutilizáveis.',
    id: 'p1',
    },
    {
        pergunta: 'Julgue o próximo item, relativos à linguagem de programação JavaScript e às ferramentas Node e React. O JSX (JavaScript Syntax Extension) é de uso obrigatório no React e permite inserir a interface do usuário no código JavaScript.',
        options: ['Certo', 'Errado'],
        resposta: 'Errado',
        id: 'p2',
      },
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p3',
  },
  {
    pergunta: 'MapReduce oferece um modelo de programação com processamento por meio de uma combinação entre chaves e valores.',
    options: ['Certo', 'Errado'],
    resposta: 'Certo',
    id: 'p4',
  },
  {
    pergunta: 'Em JavaScript, são eventos conhecidos como Eventos de Página:',
    options: [
      'onReset, onLoad e onClick.',
      'onSubmit, onReset e onLoad.',
      'onFocus, onUnload e onChange.',
      'onReset, onClick e onFocus.',
      'onFocus, onBlur e onUnload.',
    ],
    resposta: 'onFocus, onBlur e onUnload.',
    id: 'p5',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p6',
  },
  {
    pergunta: 'Em React.Js, como são chamadas as entradas que são passadas na criação dos componentes React, usando uma convenção de nomenclatura semelhante aos atributos de tag HTML.',
    options: [
    'Refs',
    'Props', 
    'State',
    'Keys',
    'Elements',
    ],
    resposta: 'Props',
    id: 'p7',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p8',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p9',
  },
  {
    pergunta: 'Para o desenvolvimento de aplicações Web, qual item abaixo contém apenas frameworks/bibliotecas/plataformas que foram desenvolvidas ou que dependem de JavaScript ou TypeScript:',
    options: [
    'Node.js, CSS, Java.', 
    'React, Node.js, Scala.', 
    'Angular, React, Vue.js.',
    'Angular, Node.js, Java',
    'Java AWT, Angular, Scala.'
    ],
    resposta: 'Angular, React, Vue.js.',
    id: 'p10',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p style={{fontSize: '25px', fontWeight: '600'}}>{resultado}</p>
      ) : (
        <button style={{textAlign: 'center', padding: '10px 15px', border: 'none', borderRadius: '5px', background: '#3fc6fc', color: 'white', cursor: 'pointer'}} onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default App;
