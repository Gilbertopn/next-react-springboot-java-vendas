import { ReactNode } from 'react';
import {Menu} from './menu'
import { Message } from 'components'
import { ALert } from 'components/common/message'

interface LayoutProps {
    titulo?: string;
    children?: ReactNode;
    mensagens?: Array<ALert>;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
   return(
        <div className="app">
            <section className="mian-content columns is-fullheight">
                <Menu/>

                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">
                                     {props.titulo}
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                {props.mensagens &&
                                    props.mensagens.map( msg => <Message {... msg}/>)
                                }
                                
                                {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
   ) 
}