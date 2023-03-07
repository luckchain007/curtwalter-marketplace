import {useTheme} from "../../lib/next-themes";
import {Link} from "react-router-dom";

export function AlphaArtLogo({ className }: { className?: string }) {
  const { theme } = useTheme()
  const color = theme === 'light' ? 'black' : 'white'

  return (
    <Link to="/">
      <svg className={className} width={328} height={128} viewBox="0 0 328 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM56 80C42.7452 80 32 69.2548 32 56C32 42.7452 42.7452 32 56 32C69.2548 32 80 42.7452 80 56V112H96V96H112V80H96V56C96 33.9086 78.0914 16 56 16C33.9086 16 16 33.9086 16 56C16 78.0914 33.9086 96 56 96H72V80H56Z" fill={color}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M216 96.0039C208.702 105.717 197.085 112 184 112C161.909 112 144 94.0914 144 72C144 49.9086 161.909 32 184 32C197.085 32 208.702 38.2827 216 47.9961V32H232V112H216V96.0039ZM208 72C208 85.2548 197.255 96 184 96C170.745 96 160 85.2548 160 72C160 58.7452 170.745 48 184 48C197.255 48 208 58.7452 208 72Z" fill={color}/>
        <path d="M256 112H240V32H256V40C258.473 38.1454 261.157 36.5802 264 35.3394C264.23 35.2391 264.461 35.1409 264.693 35.0448C269.546 33.0346 274.747 32 280 32V47.9887C276.847 47.9887 273.724 48.6098 270.811 49.8165C267.898 51.0232 265.251 52.7918 263.021 55.0215C260.792 57.2511 259.023 59.8981 257.816 62.8113C256.704 65.4977 256.089 68.3619 256 71.2642V112Z" fill={color}/>
        <path d="M288 32V72C288 77.2529 289.035 82.4543 291.045 87.3073C291.141 87.5392 291.239 87.7701 291.339 88C293.338 92.5802 296.179 96.7474 299.716 100.284C303.43 103.999 307.84 106.945 312.693 108.955C317.546 110.965 322.747 112 328 112V96.0113C324.847 96.0113 321.724 95.3902 318.811 94.1835C315.898 92.9768 313.251 91.2082 311.021 88.9785C308.792 86.7489 307.023 84.1019 305.816 81.1887C304.61 78.2755 303.989 75.1532 303.989 72H304V64H328V48H304V32H288Z" fill={color}/>
      </svg>
    </Link>
  )
}