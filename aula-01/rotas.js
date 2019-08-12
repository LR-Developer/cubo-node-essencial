import hello from './controller/hello-controller'
import fibonacci from './controller/fibonacci-controller'

export default function rotas(app) {
    app.use('/api/hello', hello)
    app.use('/api/fibonacci', fibonacci)
}
