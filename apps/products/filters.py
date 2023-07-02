from rest_framework import filters

class PriceFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        price_min = request.query_params.get('price_min')
        price_max = request.query_params.get('price_max')

        if price_min and price_max:
            queryset = queryset.filter(price__range=(price_min, price_max))
        elif price_min:
            queryset = queryset.filter(price__gte=price_min)
        elif price_max:
            queryset = queryset.filter(price__lte=price_max)

        return queryset