import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { AllProducts } from "../../services/Api";
import LoadSpinner from "../../components/LoadingSpinner";
import ScreenContainer from "../../components/ScreenContainer";
import DealsCard from "../../components/DealsCard";
import AppHeader from "../../components/AppHeader";
import ProductCard from "../../components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const result = await AllProducts();

        const data = result.data;
        const latest = data.slice(0, 10);
        setLatestProducts(latest);
        const productExceptLatest = data.slice(10, data.length);
        setProducts(productExceptLatest);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <AppHeader showBackBtn={false} />
        <ScreenContainer>
          {loading ? (
            <LoadSpinner message={"Loading.."} />
          ) : (
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>NEW ARRIVALS</Text>
              </View>
              <View style={styles.newArrivalContainer}>
                <FlatList
                  nestedScrollEnabled={true}
                  horizontal
                  data={latestProducts}
                  renderItem={({ item }) => <DealsCard item={item} />}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>

              <View style={styles.pageWrap}>
                <FlatList
                  nestedScrollEnabled={true}
                  numColumns={2}
                  data={products}
                  renderItem={({ item }) => <ProductCard item={item} />}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </ScrollView>
          )}
        </ScreenContainer>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
