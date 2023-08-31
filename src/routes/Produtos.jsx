import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai";
import {BsFillTrashFill as BinObj} from "react-icons/bs";

export default function Produto(){

    return(
        <>
            <h1>Produtos Informáticos - FIAPO</h1>
            <table>
            <thead>
                <tr>
                  <th>ID</th>
                  <th>NOME</th>
                  <th>DESCRIÇÃO</th>
                  <th>PREÇO</th>
                  <th>Editar/Excluir</th>
                </tr>
              </thead>

              <tbody>
                {ListaProdutos.map((produto, indice)=>(
                    <tr key={indice}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.desc}</td>
                        <td>{produto.preco}</td>
                        <td> <Link to={`/editar/produtos/${produto.id}`}> <EditObj/></Link> |
                        <Link to={`/excluir/produtos/${produto.id}`}><BinObj/></Link></td>
                    </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                    <td colSpan={4}>PRODUTOS</td>
                </tr>
              </tfoot>
            </table>
        </>
    )
}