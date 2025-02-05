import Link from "next/link";

const DocumentPage = () => {
    return ( 
        <div className="flex flex-col gap-4">DocumentPage
            <Link href="/documents/1">Clique aqui para ir página de detalhes</Link>
        </div>
     );
}
 
export default DocumentPage;