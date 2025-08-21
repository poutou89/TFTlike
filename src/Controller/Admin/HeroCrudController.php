<?php

namespace App\Controller\Admin;

use App\Entity\Hero;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class HeroCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Hero::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnForm(),

            TextField::new('nom'),
            IntegerField::new('pdv')          
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),
            IntegerField::new('atk')           
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),
            IntegerField::new('mana')        
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),
            IntegerField::new('shield')       
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),
            IntegerField::new('chance_atk')   
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),
            IntegerField::new('chance_crit')  
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),
            IntegerField::new('chance_esq')   
                ->setFormTypeOptions(['attr' => ['min' => 0, 'max' => 100]]),

            ImageField::new('picture', 'Image')
                ->setBasePath('images/mg')                 // utilisé pour afficher l’img (index/detail)
                ->setUploadDir('public/images/mg')         // où stocker le fichier côté serveur
                ->setUploadedFileNamePattern('[slug]-[timestamp].[extension]')
                ->setRequired(false),

            AssociationField::new('role')
                ->setFormTypeOption('choice_label', 'nom'),
            AssociationField::new('family_id'),
        ];
    }
    
}
