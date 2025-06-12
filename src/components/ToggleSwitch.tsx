
import './TogleSwitch.css';

type TogleSwitchProps = {
    isEnabled: boolean;
    ariaLabel?: string;
    onToggle: () => void;
};

export default function TogleSwitch({ isEnabled, ariaLabel, onToggle }: TogleSwitchProps) {
    return (
        <label className="switch">
            <input 
                type="checkbox"
                checked={isEnabled}
                onChange={onToggle} 
                aria-checked={isEnabled}
                aria-label={ariaLabel}
            />
            <span className="switch__slider switch__slider--round"></span>
        </label>
    );
}
