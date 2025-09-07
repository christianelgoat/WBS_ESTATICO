import React from 'react';
import { WBSItem } from '../types';
import { UserIcon, ToolsIcon, FileTextIcon, FolderIcon, ChevronDownIcon } from './Icons';

interface WBSNodeProps {
  item: WBSItem;
  level: number;
}

const levelColors = [
  'border-sky-500',
  'border-emerald-500',
  'border-amber-500',
  'border-violet-500',
];

const WBSNode: React.FC<WBSNodeProps> = ({ item, level }) => {
  const [isOpen, setIsOpen] = React.useState(level < 2);
  const hasChildren = item.children && item.children.length > 0;
  const borderColor = levelColors[level % levelColors.length];

  return (
    <div className={`pl-4 ${!item.isDeliverable ? `border-l-2 ${borderColor}` : ''}`}>
      <div 
        className={`group relative rounded-lg transition-all duration-300 ${item.isDeliverable ? 'bg-slate-100 hover:bg-slate-200/80' : 'hover:bg-slate-50'}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 ${hasChildren ? 'cursor-pointer' : ''}`}>
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 pt-1">
              {item.isDeliverable ? (
                <FileTextIcon className="h-5 w-5 text-sky-600" />
              ) : (
                <FolderIcon className="h-5 w-5 text-slate-500" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800">
                <span className={`font-mono text-sm ${item.isDeliverable ? 'text-sky-600' : 'text-slate-500'} mr-2`}>{item.id}</span>
                {item.name}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 sm:mt-0 sm:pl-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5" title="Responsable Principal">
              <UserIcon className="h-4 w-4 text-slate-500" />
              <span className="font-medium text-slate-700">{item.responsible}</span>
            </div>
            {item.tools && (
              <div className="flex items-center gap-1.5" title="Herramientas Clave">
                <ToolsIcon className="h-4 w-4 text-slate-500" />
                <span>{item.tools}</span>
              </div>
            )}
          </div>

          {hasChildren && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 sm:static sm:transform-none sm:ml-4">
              <ChevronDownIcon className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          )}
        </div>
      </div>
      
      {hasChildren && (
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="pt-2 space-y-2">
            {item.children?.map((child, index) => (
              <WBSNode key={index} item={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WBSNode;