import hello from './controller/hello-controller'
import fibonacci from './controller/fibonacci-controller'
import usuario from './controller/usuarioController'
import produto from './controller/produtoController'

export default function rotas(app) {
    app.use('/api/hello', hello)
    app.use('/api/fibonacci', fibonacci)
    app.use('/api/usuario', usuario)
    app.use('/api/produto', produto)
}
