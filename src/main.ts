import express from "express";
import { db, firestore } from '../banco-de-dados/firebase';

const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Bem vindo a minha primeira API')
})

app.post('/usuario', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email
    const telefone = req.body.telefone


    try {
        const docRef = await firestore.addDoc(firestore.collection(db, 'usuario'), {
            nome: nome,
            email: email,
            telefone: telefone
        })
        res.send("Usuário adicionado com sucesso:" + docRef.id)
    } catch (e) {
        console.log(e)

        res.status(500).send(e)
    }
});

app.get('/ListarUsuario', async (rec, res) =>{
   try {
    const usuario = await firestore.getDocs(firestore.collection(db, 'usuario'))
    const usuarioLista = usuario.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
    }))
    res.send(usuarioLista)
   } catch (e) {
    console.log("Erro ao listar usuário: " + e)
res.status(500).send("Erro ao listar usuário:" + e)

   }
})

app.put('/AtualizarUsuario/:id', async (req, res) => {
const id = req.params.id
const nome = req.body.nome

try {
    await firestore.updateDoc(firestore.doc(db, 'usuario', id), {
        nome:nome,
    })
    res.send('Usuário atualizado com sucesso!')
    
} catch (e) {
    console.log('Erro ao atualizar usuário' + e)

    res.status(500).send('Erro ao atualizar usuário:' + e)
    
}
})

app.delete("/deletarUsuario/:id", async (req, res)=>{
    const id = req.params.id

    try {
        await firestore.deleteDoc(firestore.doc(db,'usuario', id))

       res.send('Usuário deletado com sucesso!')


    } catch (e) {
        console.log('Erro ao deletar usuario:' + e )
        
        res.status(500).send('Erro ao deletar usuario' + e)
    }
})

app.listen(3000, function () {
    console.log("Serviço rodando em http://localhost:3000")
})
