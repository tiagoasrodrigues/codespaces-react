import './style.css';

export let btLink = 'https://github.com/tiagoasrodrigues';

export function Button() { 
  return(
    <a href={btLink} target='_blank'>
      <button className='container'>Click me!</button>
    </a>
  )
}