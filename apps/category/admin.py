from django.contrib import admin
from django.utils.safestring import mark_safe
from django.urls import reverse
from django.utils.html import escape
from django import forms
from apps.category.models import Category, SubCategory
# Register your models here.

class SubCategoryForm(forms.ModelForm):
    class Meta:
        model = SubCategory
        fields = (
            'name',
            'slug',
        )

class SubCategoryInline(admin.TabularInline):
    form = SubCategoryForm
    model = SubCategory
    extra = 3


class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'slug',
        '_sub_categories',
    )
    list_display_links = ('name',)
    exclude = (
        'service_in_location',
    )
    inlines = [
        SubCategoryInline,
    ]
    def _sub_categories(self, obj):
        return mark_safe(" ".join([
            f"""
            <a href='{ reverse('admin:category_subcategory_change', args=(p.id,)) }'
                style='display: flex; justify-content: space-between; max-width: 300px; margin-bottom: 4px;'
            >
              <div>{escape(str(p))}</div>
            </a>
            """
            for p in obj.sub_category.all()
        ]))


admin.site.register(Category, ServiceAdmin)
admin.site.register(SubCategory)