import { useState } from 'react'

// Types pour les produits
interface ProductCategory {
  name: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  quantity: number;
  unit?: string;
  image?: string; // URL de l'image du produit
}

// Données des produits basées sur l'image fournie
const productCategories: ProductCategory[] = [
  {
    name: "TRANSPORT",
    products: []
  },
  {
    name: "FRITION / FRITION PÂTISSERIES",
    products: [
      { id: 1, name: "ÉCLAIR CHOCOLAT FRAISE ANIS", quantity: 0, image: "/images/eclair-chocolat.jpg" },
      { id: 2, name: "ÉCLAIR CHOCOLAT DP LOUVRE ANIS FRAISE", quantity: 0, image: "/images/eclair-louvre.jpg" },
      { id: 3, name: "ÉCLAIR CHOCOLAT ANIS CARRÉ", quantity: 0, image: "/images/eclair-carre.jpg" },
      { id: 4, name: "TARTE ORANGE SURGELÉE ANIS", quantity: 0, image: "/images/tarte-orange.jpg" },
      { id: 5, name: "MONT BLANC", quantity: 0, image: "/images/mont-blanc.jpg" },
      { id: 6, name: "TARTE CITRON ANIS", quantity: 0, image: "/images/tarte-citron.jpg" },
      { id: 7, name: "NAIADE COCO CHOCO ANIS", quantity: 0, image: "/images/naiade-coco.jpg" },
      { id: 8, name: "CONCERTO FRAMBOISE ANIS", quantity: 0, image: "/images/concerto-framboise.jpg" },
      { id: 9, name: "TARTE FRAISE ANIS", quantity: 0, image: "/images/tarte-fraise.jpg" },
      { id: 10, name: "MILLEFEUILLE VANILLE ANIS", quantity: 0, image: "/images/millefeuille.jpg" },
      { id: 11, name: "NOISETTINE CHOCOLAT SURGELÉE ANIS", quantity: 0, image: "/images/noisettine.jpg" },
      { id: 12, name: "TARTE FRAMBOISE ANIS", quantity: 0, image: "/images/tarte-framboise.jpg" },
      { id: 13, name: "TARTE CHOCOLAT BANANE", quantity: 0, image: "/images/tarte-chocolat-banane.jpg" },
      { id: 14, name: "TARTE CITRON FRAISE MIEL PEPS", quantity: 0, image: "/images/tarte-citron-fraise-miel-peps.jpg" },
      { id: 15, name: "ÉCLAIR CHOCOLAT DP LOUVRE PLUME ANIS", quantity: 0, image: "/images/eclair-louvre-plume.jpg" },
      { id: 16, name: "TARTE MONT BLANC VANILLE ANIS", quantity: 0, image: "/images/tarte-mont-blanc.jpg" },
      { id: 17, name: "TARTE VANILLE PÉCAN ANIS", quantity: 0, image: "/images/tarte-vanille-pecan.jpg" }
    ]
  },
  {
    name: "GÂTEAU DE VOYAGE & FOUR SEC",
    products: [
      { id: 18, name: "CARRÉ MARBRE AU CHOCOLAT", quantity: 0, image: "/images/carre-marbre.jpg" },
      { id: 19, name: "COOKIE RICHE CHOCOLAT", quantity: 0, image: "/images/cookie-riche-chocolat.jpg" },
      { id: 20, name: "COOKIE RICHE VANILLE", quantity: 0, image: "/images/cookie-riche-vanille.jpg" },
      { id: 21, name: "FINANCIER VANILLE", quantity: 0, image: "/images/financier-vanille.jpg" },
      { id: 22, name: "JUS DE RIZ MADELEINE", quantity: 0, image: "/images/jus-de-riz-madeleine.jpg" },
      { id: 23, name: "FINANCIER CHOCOLAT X 25", quantity: 0, image: "/images/financier-chocolat.jpg" }
    ]
  },
  {
    name: "PIÈCES COCKTAIL SUCRÉES",
    products: [
      { id: 24, name: "PLATEAUX PETITS FOURS X 91", quantity: 0, image: "/images/plateaux-petits-fours.jpg" }
    ]
  },
  {
    name: "ENTREMETS",
    products: [
      { id: 25, name: "MONT BLANC 6 PAX", quantity: 0, image: "/images/mont-blanc-6-pax.jpg" },
      { id: 26, name: "MONT BLANC 8 PAX", quantity: 0, image: "/images/mont-blanc-8-pax.jpg" }
    ]
  },
  {
    name: "PRODUITS SECS",
    products: [
      { id: 27, name: "CHOCOLAT NOIR BELCOLADE 55% 5 KG BIO", quantity: 0, image: "/images/chocolat-noir-belcolade.jpg" }
    ]
  }
];

// Image placeholder pour les produits sans image
const placeholderImage = "https://via.placeholder.com/50x50?text=Gâteau";

export default function OrdersPage() {
  const [categories, setCategories] = useState<ProductCategory[]>(productCategories);
  const [orderDate, setOrderDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [storeId, setStoreId] = useState<string>("");
  
  // Fonction pour mettre à jour la quantité d'un produit
  const updateProductQuantity = (categoryIndex: number, productIndex: number, quantity: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].products[productIndex].quantity = quantity;
    setCategories(newCategories);
  };
  
  // Calculer le total des produits commandés
  const calculateTotal = () => {
    let total = 0;
    categories.forEach(category => {
      category.products.forEach(product => {
        total += product.quantity;
      });
    });
    return total;
  };
  
  // Fonction pour soumettre la commande
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filtrer les produits avec une quantité > 0
    const orderedProducts = categories
      .flatMap(category => 
        category.products.filter(product => product.quantity > 0)
      );
    
    // Ici, vous enverriez normalement ces données à votre API
    console.log("Commande soumise:", {
      date: orderDate,
      storeId,
      products: orderedProducts,
      totalQuantity: calculateTotal()
    });
    
    // Réinitialiser le formulaire ou afficher un message de confirmation
    alert("Commande envoyée avec succès!");
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: '2rem 1rem',
      backgroundColor: '#f8f5f0',
      margin: '0 auto',
      maxWidth: '100%'
    }}>
      {/* En-tête avec logo et navigation */}
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Cormorant Garamond', serif", color: '#4A2B0F' }}>ANGELINA</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: '#4A2B0F' }}>Tableau de bord</a>
          <a href="#" style={{ color: '#4A2B0F', fontWeight: 'bold', borderBottom: '2px solid #C5A572' }}>Commandes</a>
          <a href="#" style={{ color: '#4A2B0F' }}>Analytics</a>
          <a href="#" style={{ color: '#4A2B0F' }}>Boutiques</a>
          <a href="#" style={{ color: '#4A2B0F' }}>Produits</a>
        </div>
        <a href="#" style={{ color: '#4A2B0F' }}>Mon compte</a>
      </div>
      
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        backgroundColor: 'white', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        borderRadius: '0.5rem', 
        overflow: 'hidden',
        border: '1px solid #E8D5B5',
        margin: '0 auto'
      }}>
        {/* Titre du planning */}
        <div style={{ 
          textAlign: 'center', 
          padding: '1rem 0', 
          borderBottom: '1px solid #E8D5B5', 
          backgroundColor: 'rgba(232, 213, 181, 0.3)' 
        }}>
          <h1 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            fontFamily: "'Cormorant Garamond', serif", 
            color: '#4A2B0F' 
          }}>PLANNING DE PRODUCTION GLOBAL</h1>
        </div>
        
        <form onSubmit={handleSubmit} style={{ 
          padding: '1.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%'
        }}>
          {/* En-tête du formulaire */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem', 
            marginBottom: '1.5rem',
            width: '100%'
          }}>
            <div>
              <label htmlFor="orderDate" style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                marginBottom: '0.25rem',
                color: '#4A2B0F', 
                fontFamily: "'Work Sans', sans-serif" 
              }}>
                Date de livraison
              </label>
              <input
                type="date"
                id="orderDate"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '0.5rem 0.75rem', 
                  border: '1px solid #E8D5B5', 
                  borderRadius: '0.375rem',
                  fontFamily: "'Work Sans', sans-serif",
                  outline: 'none'
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="storeId" style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                marginBottom: '0.25rem',
                color: '#4A2B0F', 
                fontFamily: "'Work Sans', sans-serif" 
              }}>
                Boutique
              </label>
              <select
                id="storeId"
                value={storeId}
                onChange={(e) => setStoreId(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '0.5rem 0.75rem', 
                  border: '1px solid #E8D5B5', 
                  borderRadius: '0.375rem',
                  fontFamily: "'Work Sans', sans-serif",
                  outline: 'none'
                }}
                required
              >
                <option value="">Sélectionnez une boutique</option>
                <option value="1">Boutique Opéra</option>
                <option value="2">Boutique Rivoli</option>
                <option value="3">Boutique Saint-Honoré</option>
              </select>
            </div>
          </div>
          
          {/* Liste des produits par catégorie */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            width: '100%'
          }}>
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} style={{ 
                border: '1px solid #E8D5B5', 
                borderRadius: '0.375rem', 
                overflow: 'hidden' 
              }}>
                {/* En-tête de catégorie avec texte blanc pour meilleur contraste */}
                <div style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: '#4A2B0F', 
                  color: 'white',
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  textAlign: 'center'
                }}>
                  Famille : {category.name}
                </div>
                
                <div style={{ borderTop: '1px solid #E8D5B5' }}>
                  {category.products.map((product, productIndex) => (
                    <div 
                      key={product.id} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: '0.75rem 1rem',
                        borderBottom: productIndex < category.products.length - 1 ? '1px solid #E8D5B5' : 'none',
                        transition: 'background-color 0.15s',
                        backgroundColor: 'rgba(232, 213, 181, 0.05)'
                      }}
                    >
                      {/* Image du produit */}
                      <div style={{ 
                        width: '3rem', 
                        height: '3rem', 
                        marginRight: '1rem', 
                        flexShrink: 0,
                        overflow: 'hidden',
                        borderRadius: '0.375rem',
                        border: '1px solid #E5E7EB'
                      }}>
                        <img 
                          src={product.image || placeholderImage} 
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = placeholderImage;
                          }}
                        />
                      </div>
                      
                      {/* Nom du produit */}
                      <div style={{ 
                        flex: '1',
                        textAlign: 'center',
                        fontFamily: "'Work Sans', sans-serif"
                      }}>{product.name}</div>
                      
                      {/* Champ de quantité */}
                      <div style={{ width: '5rem', marginLeft: '1rem' }}>
                        <input
                          type="number"
                          min="0"
                          value={product.quantity}
                          onChange={(e) => updateProductQuantity(
                            categoryIndex,
                            productIndex,
                            parseInt(e.target.value) || 0
                          )}
                          style={{ 
                            width: '100%',
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #E8D5B5',
                            borderRadius: '0.25rem',
                            textAlign: 'right',
                            fontFamily: "'Work Sans', sans-serif",
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Résumé et soumission */}
          <div style={{ 
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '1rem'
          }}>
            <div style={{ 
              fontSize: '1.125rem',
              fontWeight: '500',
              fontFamily: "'Cormorant Garamond', serif",
              color: '#4A2B0F',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Total quantité: <span style={{ fontWeight: 'bold' }}>{calculateTotal()}</span>
            </div>
            <button
              type="submit"
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: '#4A2B0F',
                color: 'white',
                fontWeight: '500',
                borderRadius: '0.375rem',
                fontFamily: "'Work Sans', sans-serif",
                border: 'none',
                cursor: 'pointer',
                outline: 'none'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8B633B')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4A2B0F')}
            >
              Envoyer la commande
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
