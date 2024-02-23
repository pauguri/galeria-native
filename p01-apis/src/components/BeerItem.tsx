import { Beer } from "../@types/types";
import CalendarIcon from "../icons/CalendarIcon";
import HopIcon from "../icons/HopIcon";
import QuoteIcon from "../icons/QuoteIcon";
import WheatIcon from "../icons/WheatIcon";
import { colorFromEBC } from "../utils/colorUtils";
import './BeerItem.css';

export default function BeerItem({ beer }: { beer: Beer }) {
    const color = colorFromEBC(beer.ebc);
    return (
        <li className="beer-item" style={{ borderColor: color, backgroundColor: color + '22' }}>
            <div className="header">
                <img src={beer.image_url} alt={beer.name} />
                <div className="content">
                    <h2>{beer.name}</h2>
                    <div className="tagline-container" style={{ color: color }}>
                        <QuoteIcon color={color} size={16} />
                        <p className="tagline">{beer.tagline}</p>
                    </div>
                    <p className="description">{beer.description}</p>
                </div>
            </div>
            <ul className="metadata" style={{ borderColor: color }}>
                <li className="metadata-item">
                    <div className="label">
                        <CalendarIcon size={16} />
                        <span>First Brewed</span>
                        <div className="separator" style={{ backgroundColor: color }}></div>
                    </div>
                    <div className="value">
                        {beer.first_brewed}
                    </div>
                </li>
                {beer.ingredients.malt.length > 0 && <li className="metadata-item">
                    <div className="label">
                        <WheatIcon size={16} />
                        <span>Malt</span>
                        <div className="separator" style={{ backgroundColor: color }}></div>
                    </div>
                    <ul className="value">
                        {beer.ingredients.malt.map((malt, index) => <li key={index}>{malt.name}</li>)}
                    </ul>
                </li>}
                {beer.ingredients.hops.length > 0 && <li className="metadata-item">
                    <div className="label">
                        <WheatIcon size={16} />
                        <span>Hops</span>
                        <div className="separator" style={{ backgroundColor: color }}></div>
                    </div>
                    <ul className="value hops-list">
                        {beer.ingredients.hops.map((hop, index) => <li key={index}>
                            <span>{hop.name}</span>
                            <HopIcon stage={hop.add} size={16} />
                        </li>)}
                    </ul>
                </li>}
                <li className="metadata-item">
                    <div className="label">
                        <WheatIcon size={16} />
                        <span>Yeast</span>
                        <div className="separator" style={{ backgroundColor: color }}></div>
                    </div>
                    <div className="value">
                        {beer.ingredients.yeast}
                    </div>
                </li>
            </ul>
        </li>
    )
}
