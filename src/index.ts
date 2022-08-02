import { PORT } from './config'
import app from './app'

app.listen(PORT, () => console.log(`API working in http://localhost:${PORT}`))
