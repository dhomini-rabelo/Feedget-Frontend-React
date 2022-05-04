import ideaIconUrl from '../../assets/Idea.svg'
import thoughtIconUrl from '../../assets/Thought.svg'
import bugIconUrl from '../../assets/Bug.svg'


export const feedbackTypes = {
    
    BUG : {
        title: 'Problema',
        icon: {
            source: bugIconUrl,
            alt: 'ícone de um inseto',
        }
    },
    
    IDEA : {
        title: 'Ideia',
        icon: {
            source: ideaIconUrl,
            alt: 'ícone de uma lâmpada',
        }
    },
    
    OTHER : {
        title: 'Outro',
        icon: {
            source: thoughtIconUrl,
            alt: 'ícone de uma nuvem de pensamento',
        }
    }
}