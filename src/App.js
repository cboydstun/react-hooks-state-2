// importing components
import CounterWithHooks from './components/CounterWithHooks'
import TextDisplay from './components/TextDisplay'
import ClassCounter from './components/ClassCounter'
import EffectHook from './components/EffectHook'

// main function to be exported
export default function App() {
    return (
        <div>
            <h1>Hey from app</h1>
            {/* calling components imported from above */}
            <ClassCounter />
            <CounterWithHooks />
            <TextDisplay />
            <EffectHook name="Clarissa" />
        </div>
    )
}
