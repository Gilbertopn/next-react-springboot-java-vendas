import { InputHTMLAttributes } from "react";
import { formatReal } from "app/util/money"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
    onChange?: (value: any) => void;
    label: string;
    columnClasses?: string;
    currency?: boolean;
    error?: string;
}
export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    currency,
    error,
    ... inputProps//outrasProps
}: InputProps) => {
    return(
        <div className={`field column ${columnClasses}`}>
            <label className='label' htmlFor={id}>{label}</label>
            <div className='control'>                  
               <input className='input'
                id={id} {... inputProps}
                onChange={event =>{
                    let value = event.target.value;

                    if(value && currency){
                        value = formatReal(value);
                    }

                if(onChange){
                    onChange(event.target.value)}
                } }/>
                {error &&
                    <p className="help is-danger">{ error }</p>
                }
            </div>
        </div>
    )
}

