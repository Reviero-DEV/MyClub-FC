export interface Trophies {
    title: string;
    icon: string;
    qty: number;
}

export default function TabTrophies({ title, icon, qty }: Trophies) {
    return (
        <div className=" relative pb-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-red-700 after:via-red-900 after:to-transparent">
            <div className="flex text-red-800 items-end gap-1">
                <span dangerouslySetInnerHTML={{ __html: icon }} />
                <span className="text-4xl font-bold">{qty}</span>
            </div>
            <small className="text-gray-500">{title}</small>
        </div>
    )
}