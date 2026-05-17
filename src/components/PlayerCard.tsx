export interface Player {
    image: string;
    name: string;
    number?: number;
    role: string;
}

export default function CardPlayer({ image, name, number, role }: Player) {
    const hasNumber = typeof number === 'number';
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-red-700 max-w-sm h-105 bg-neutral-950 transition-all hover:shadow-lg">

            {image && (<div className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105">
                <img src={image} alt={name} />
            </div>)}
            <div className="flex flex-col p-4">
            {name && (
                <h4>{name}</h4>
            )}
            {(role || hasNumber) && (<div className="flex justify-between text-gray-400">
                {role && (
                    <span>{role}</span>
                )}
                {hasNumber && (
                    <span>{number}</span>
                )}
            </div>)}
            </div>
        </div>
    )
}