import ClaimsTemplate from './ClaimsTemplate.jsx';
import DenialTemplate from './DenialTemplate.jsx';

function TemplateVisual({ templateId, config = {}, mini = false }) {
  const common = { title: config.title, primaryColor: config.primaryColor, compact: config.compact, mini };
  return templateId === 'denial-insights' ? <DenialTemplate {...common} /> : <ClaimsTemplate {...common} />;
}


export default TemplateVisual;
