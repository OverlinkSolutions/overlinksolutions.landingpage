import typography from './typography.module.sass'

interface TypographyProps {
    title: string
    description: string
}

export default function Typography(props: TypographyProps) {
    return (
        <section id={typography.container} className="container column">
        <div id={typography.text} className="container column">
          <h1>
          {props.title}
          </h1>
          <p>
          {props.description}
          </p>
        </div>
        </section>
    )
}