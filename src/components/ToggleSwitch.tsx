
import './TogleSwitch.css';

export default function TogleSwitch({ isEnabled, onToggle }: { isEnabled: boolean; onToggle: () => void }) {
    return (
        <label className="switch">
            <input type="checkbox" checked={isEnabled} onChange={onToggle} />
            <span className="switch__slider switch__slider--round"></span>
        </label>
    );
}
