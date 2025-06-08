
import TogleSwitch from "./ToggleSwitch";
import { useExtensionActions } from "../store/store";
import './Extension.css';

export type ExtentionItem = {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
};

type ExtensionProps = {
    item: ExtentionItem;
}

export default function Extension({ item }: ExtensionProps) {
    const { logo, name, description, isActive } = item;
    const { removeExtension, toggleExtension } = useExtensionActions();

    const handleRemove = () => {
        removeExtension(name);
    };
    const handleToggle = () => {
        toggleExtension(name);
    };

    return (
        <div className="extension">
            <div className="extension__header">
                <div className="extension__icon">
                    <img src={logo} alt="Extension Icon" />
                </div>
                <div className="extension__details">
                    <h2 className="extension__title">{name}</h2>
                    <p className="extension__description text">{description}</p>
                </div>
            </div>
            <div className="extension__controls">
                <button className="button" onClick={handleRemove}>Remove</button>
                <TogleSwitch isEnabled={isActive} onToggle={handleToggle} />
            </div>
        </div>
    );
}
