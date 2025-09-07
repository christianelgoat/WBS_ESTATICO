import React from 'react';
import { wbsData } from './constants';
import { BusinessObjective } from './types';
import { InfoIcon, TargetIcon } from './components/Icons';
import WBSNode from './components/WBSNode';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-700 font-sans p-4 sm:p-6 lg:p-10">
      <main className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Estructura de Desglose del Trabajo (WBS)
          </h1>
          <p className="mt-4 text-lg text-slate-400">
        
          </p>
        </header>

        <div className="bg-sky-50 border-l-4 border-sky-500 text-sky-800 p-4 rounded-r-lg mb-12 flex items-start space-x-3">
          <div className="flex-shrink-0 pt-1">
            <InfoIcon className="h-6 w-6 text-sky-500" />
          </div>
          <div>
            <h3 className="font-bold">Nota sobre la Herramienta de Gestión</h3>
            <p className="text-sm text-sky-700">
              Este anexo representa el plan de trabajo estático. La gestión dinámica, el seguimiento del progreso en tiempo real, las dependencias entre tareas y el Diagrama de Gantt se mantienen y actualizan de forma continua en nuestra plataforma de gestión de proyectos: <strong>ClickUp</strong>.
            </p>
          </div>
        </div>
        
        <div className="space-y-12">
          {wbsData.map((objective: BusinessObjective, index: number) => (
            <section key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 transition-shadow hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="flex-shrink-0 bg-teal-100 text-teal-600 rounded-full p-3">
                  <TargetIcon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Objetivo de Negocio {index + 1}
                  </h2>
                  <p className="text-teal-600 font-semibold text-base">{objective.title}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {objective.items.map((item, itemIndex) => (
                  <WBSNode key={itemIndex} item={item} level={0} />
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <footer className="text-center mt-12 py-6 border-t border-slate-800">
          
        </footer>
      </main>
    </div>
  );
};

export default App;