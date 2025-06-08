import Extension from "./Extension";
import './ExtensionGrid.css';
import { useFilteredExtensions } from "../store/store";

export default function ExtensionGrid() {
    const items = useFilteredExtensions();

    return (
        <div className="extension-grid">
            {items.map((extension, index) => (
                <Extension
                    key={extension.name + index}
                    item={extension}
                />
            ))}
        </div>
    )
}