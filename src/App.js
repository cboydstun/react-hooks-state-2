import CounterWithHooks from './components/CounterWithHooks'
import TextDisplay from './components/TextDisplay'
import ClassCounter from './components/ClassCounter'
import EffectHook from './components/EffectHook'

export default function App() {
    return (
        <div>
            <h1>Hey from app</h1>
            <CounterWithHooks />
            <TextDisplay />
            <ClassCounter />
            <EffectHook />
        </div>
    )
}
