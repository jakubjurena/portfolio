# Portfolio audience toggle POC

## Context
- Spravny projekt pro dalsi praci je `/Users/jakubjurena/personal/portfolio`.
- Homepage bezi pres `src/app/[locale]/page.tsx`.
- Aktualni obsah homepage skladaji komponenty `Navigation`, `Hero`, `Services`, `BiggerProject`, `About`, `Contact` a `Footer`.
- Lokalizace jsou resene pres `next-intl`, texty jsou v `messages/cs.json` a `messages/en.json`.
- Prvni iterace se tyka pouze ceske lokalizace `/cs`.

## Goals
- Cilem neni hned prepsat ostrou homepage.
- Cilem je porovnat ruzne zpusoby, jak navstevnikovi nabidnout dve urovne komunikace:
  - laicky
  - technicky
- POC varianty maji pomoci rozhodnout, ktery interaction pattern ma smysl dal rozvijet do ostreho obsahu.

## Senior feedback
- Web pusobi profesionalne a duveryhodne vizualne, ale zatim jen slabe doklada, co autor skutecne umi a na jake urovni.
- Nejvic chybi dukaz prace: case studies, odkazy na hotove projekty, repa, screenshoty, vysledky, reference.
- Pozicovani je nejasne:
  - title rika `Frontend Developer`
  - hero/about rika `Fullstack developer`
  - fact row rika `Senior frontend developer — zvladam i backend`
- `zvladam i backend` je moc vagni a vyvolava otazku, co to presne znamena v praxi.
- Stack je technicky citelny, ale nepokryva seniorskou rovinu:
  - architektura
  - testing
  - performance
  - accessibility
  - CI/CD
  - code review
  - mentoring
  - ownership
- `Node` ma byt vzdy `Node.js`.
- `REST/GraphQL` je prilis obecne; neni jasne, zda API jen konzumuje, nebo i navrhuje a implementuje.
- `Produkcni projekty od MVP po enterprise` je silny claim, ale bez jedineho prikladu je to jen tvrzeni.
- `Rozsireni tymu` je obchodne srozumitelne, ale technicky slabe; nerika, jakou roli clovek v tymu typicky zastane.
- Karty sluzeb pusobi, ze vedou na detail nebo dukaz, ale dnes zadny detail neposkytuji.
- Z pohledu seniorniho publika chybi rychla odpoved na otazku:
  - co presne dela
  - pro jake typy projektu
  - v cem je silny
  - jak to umi dolozit

## Customer feedback
- Web pusobi hezky, klidne a profesionalne; budi duveru.
- Je rychle jasne, ze jde o cloveka na weby a aplikace, ale neni dost jasne, s cim presne pomuze netechnickemu klientovi.
- `Weby`, `Firemni aplikace`, `Rozsireni tymu` jsou pro laika prilis abstraktni.
- Netechnicky navstevnik si pod tim neumi snadno predstavit konkretni vystup:
  - firemni web
  - e-shop
  - rezervacni system
  - klientsky portal
  - interni nastroj
- Technologicke vyrazy nepomahaji rozhodnout; laik nehleda React ani GraphQL, ale potvrzeni, ze autor vyresi jeho problem.
- Chybi jednoduche sdeleni typu:
  - komu pomaha
  - s jakymi zadanimi se na nej lide obraceji
  - jak vypada spoluprace
  - co muze ocekavat po prvnim kontaktu
- Osobni cast je sympaticka, ale z hlediska rozhodnuti ma mensi vahu nez reference nebo konkretni realizace.
- Nejvetsi deficit je absence dukazu a konkretnich prikladu hotove prace.
- Web zatim vic rika `jsem peclivy profesional` nez `tady je presne to, co pro tebe vyresim`.

## Selected POC scope
- Pouze `/cs`.
- Pouze POC routy, bez zasahu do stavajici `/cs`.
- Vytvorit tri varianty:
  - `/cs/poc-card`
  - `/cs/poc-first-interaction`
  - `/cs/poc-shared-toggle`

## Implementation plan

### Routing a strankova struktura
- Pridat tri nove routy pod `src/app/[locale]/...`:
  - `poc-card/page.tsx`
  - `poc-first-interaction/page.tsx`
  - `poc-shared-toggle/page.tsx`
- Kazda route bude samostatna POC stranka postavena ze stavajicich komponent a styloveho jazyka portfolia.
- POCy nebudou linkovane z ostre navigace; slouzi jen pro prime otevreni URL.

### POC 1: `poc-card`
- V hero sekci pridat jemny rozcestnik ve forme dvou karet nebo dvou velkych CTA:
  - `Rekni mi to jednoduse`
  - `Rekni mi to technicky`
- Po vyberu se uzivatel presune na prislusny blok na stejne strance.
- Laicka vetev zvyrazni:
  - co delam
  - pro koho
  - s cim pomuzu
  - jak spoluprace probiha
- Technicka vetev zvyrazni:
  - role
  - stack
  - typy projektu
  - zpusob zapojeni do tymu
- Obe vetve budou obsahove odlisne, ne jen prejmenovane titulky.

### POC 2: `poc-first-interaction`
- Po nacteni stranky bude prvni obrazovka vedome postavena jako rozhodnuti o stylu vysvetleni.
- Hlavni headline zustane strucny, pod nim budou dve dominantni volby:
  - klientska nebo laicka cesta
  - technicka cesta
- Po vyberu se zobrazi jen odpovidajici varianta obsahu homepage.
- Prepnuti zpet musi byt stale snadno dostupne nahore na strance.
- Tento POC ma overit, jestli je `first interaction split` prijemny, nebo naopak zvysuje treni.

### POC 3: `poc-shared-toggle`
- Pridat jeden sdileny boolean prepinac pro celou stranku:
  - vychozi stav: laicke vysvetleni
  - aktivni stav: zobraz technicke detaily
- Toggle bude umisten vysoko na strance a jeho stav bude sdileny mezi sekcemi.
- V jednotlivych sekcich:
  - zakladni copy zustane srozumitelne i bez prepnuti
  - po zapnuti se rozbali doplnujici technicky obsah `pod carou`
- Rozsireni se tyka minimalne:
  - Hero
  - Services
  - About
  - pripadne Contact, pokud to pomuze ocekavani spoluprace
- Implementace stavu:
  - jednoduchy client-side provider nebo top-level state v POC strance
  - props do podsekci
  - bez persistence do URL nebo localStorage v teto iteraci

### Obsahove principy pro vsechny POCy
- Opravit `Node` na `Node.js`.
- Nepouzivat claim `zvladam i backend` bez konkretizace; v POC textech nahradit konkretnejsi formulaci.
- Nepridavat zatim case studies jako novou sekci do ostre homepage, jen ponechat prostor, kde by v dalsi iteraci vznikly.
- Zachovat soucasny vizualni jazyk, typografii a tonalitu; POC ma overovat interaction a content pattern, ne redesign.

## Acceptance criteria
- `/cs/poc-card`, `/cs/poc-first-interaction` a `/cs/poc-shared-toggle` existuji a lze je otevrit primo URL.
- Stavajici `/cs` zustava beze zmeny.
- Kazdy POC jasne demonstruje jiny interaction model.
- Na kazdem POC je citelne rozliseni mezi laickou a technickou vrstvou obsahu.
- Sdileny toggle variantne meni vice sekci na strance, ne jen jednu.
- Nikde nezustane `Node` bez `.js`.
- Nikde nezustane neupresnena formulace `zvladam i backend`.
- EN lokalizace se v teto iteraci neresi.

## Assumptions
- `/plan` se v projektu nove vytvari.
- Vystup je jeden soubor: `/plan/portfolio-audience-toggle-poc.md`.
- Nazev souboru je ve `feature-style` formatu.
- Prvni implementacni iterace je ciste ceska a slouzi k internimu porovnani variant.
- Po vyberu nejlepsiho POC bude nasledovat samostatna iterace zamerena na realny obsah homepage a dukazy prace.
