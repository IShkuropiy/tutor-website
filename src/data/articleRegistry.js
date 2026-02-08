import { lazy } from 'react';

export const articleMap = {
    // Articles Folder
    "article1": lazy(() => import('../components/articles/Article1')),
    "article2": lazy(() => import('../components/articles/Article2')),
    "article3": lazy(() => import('../components/articles/Article3')),
    "article4": lazy(() => import('../components/articles/Article4')),
    "article5": lazy(() => import('../components/articles/Article5')),
    "article6": lazy(() => import('../components/articles/Article6')),
    "article7": lazy(() => import('../components/articles/Article7')),
    "article8": lazy(() => import('../components/articles/Article8')),
    "article9": lazy(() => import('../components/articles/Article9')),
    "article10": lazy(() => import('../components/articles/Article10')),
    "article11": lazy(() => import('../components/articles/Article11')),
    "article12": lazy(() => import('../components/articles/Article12')),
    "article13": lazy(() => import('../components/articles/Article13')),
    "article14": lazy(() => import('../components/articles/Article14')),
    "article15": lazy(() => import('../components/articles/Article15')),
    "article16": lazy(() => import('../components/articles/Article16')),
    "article17": lazy(() => import('../components/articles/Article17')),
    "article19": lazy(() => import('../components/articles/Article19')),
    "rimskiy": lazy(() => import('../components/articles/Rimskiy')),
    "grieg": lazy(() => import('../components/articles/Grieg')),
    "erlkönig": lazy(() => import('../components/articles/Erlkönig')),
    "saintsaens": lazy(() => import('../components/articles/SaintSaens')),
    "tarasbulba": lazy(() => import('../components/articles/TarasBulba')),
    "turina": lazy(() => import('../components/articles/Turina')),
    "satie": lazy(() => import('../components/articles/Satie')),
   
};